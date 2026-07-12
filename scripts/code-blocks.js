(function () {
  function resolveFolder(folder) {
    if (folder) {
      return folder;
    }

    let pagePath = window.location.hash.replace(/^#\//, '').replace(/\/$/, '');
    if (!pagePath) {
      console.error('No page path detected.');
      return null;
    }

    let parts = pagePath.split('/');
    if (parts.length > 1) {
      parts.pop();
    }

    return parts.join('/');
  }

  function getInsertionTarget(anchorId) {
    const main = document.getElementById('main');
    if (!main) {
      console.error('Main container not found.');
      return null;
    }

    const scriptAnchor = anchorId ? document.getElementById(anchorId) : document.currentScript;
    const insertionParent = (scriptAnchor && scriptAnchor.parentNode) ? scriptAnchor.parentNode : main;
    const insertionTarget = scriptAnchor && scriptAnchor.parentNode === insertionParent ? scriptAnchor : null;

    return { main, insertionParent, insertionTarget };
  }

  function applyButtonStyle(button) {
    button.style.position = 'absolute';
    button.style.zIndex = '2';
    button.style.display = 'inline-flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';
    button.style.border = '1px solid rgba(0, 0, 0, 0.12)';
    button.style.borderRadius = '999px';
    button.style.background = 'rgba(255, 255, 255, 0.92)';
    button.style.color = '#1C1678';
    button.style.fontFamily = "'Raleway', sans-serif";
    button.style.fontSize = '12px';
    button.style.fontWeight = '600';
    button.style.lineHeight = '1';
    button.style.padding = '0.5rem 0.8rem';
    button.style.cursor = 'pointer';
    button.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.08)';
    button.style.transition = 'transform 0.16s ease, box-shadow 0.16s ease, background-color 0.16s ease';
    button.style.top = '12px';
    button.style.right = '12px';
  }

  function addCopyBehavior(copyButton, code) {
    copyButton.addEventListener('click', async function () {
      const source = code.textContent || '';

      try {
        await navigator.clipboard.writeText(source);
        copyButton.textContent = 'Copied';
        window.setTimeout(function () {
          copyButton.textContent = 'Copy';
        }, 1200);
      } catch (error) {
        const fallback = document.createElement('textarea');
        fallback.value = source;
        fallback.setAttribute('readonly', 'true');
        fallback.style.position = 'absolute';
        fallback.style.left = '-9999px';
        document.body.appendChild(fallback);
        fallback.select();
        document.execCommand('copy');
        document.body.removeChild(fallback);
      }
    });
  }

  function addReloadBehavior(reloadButton, iframe, folder) {
    reloadButton.addEventListener('click', function () {
      try {
        iframe.contentWindow.location.reload();
      } catch (error) {
        iframe.src = folder + '/?reload=' + Date.now();
      }
    });
  }

  function fetchSketchSource(folder) {
    return fetch(folder + '/sketch.js')
      .then(function (response) {
        if (!response.ok) throw new Error('404 or bad path');
        return response.text();
      });
  }

  function applyCodeText(code, text) {
    code.textContent = text;
    if (window.Prism) {
      Prism.highlightAll();
    }
  }

  function parseCanvasSize(source) {
    const match = source.match(/createCanvas\s*\(\s*([0-9]+(?:\.[0-9]+)?)\s*,\s*([0-9]+(?:\.[0-9]+)?)/);
    if (!match) {
      return null;
    }

    const width = Math.round(Number(match[1]));
    const height = Math.round(Number(match[2]));

    if (!Number.isFinite(width) || !Number.isFinite(height)) {
      return null;
    }

    return {
      width: Math.max(1, width),
      height: Math.max(1, height),
    };
  }

  function createIframeBlock(folder) {
    const iframeWrap = document.createElement('div');
    iframeWrap.className = 'sketch-frame-wrap';
    iframeWrap.style.position = 'relative';
    iframeWrap.style.margin = '0';

    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', folder);
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '400');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.style.margin = '0';
    iframe.style.width = '100%';
    iframeWrap.appendChild(iframe);

    const reloadButton = document.createElement('button');
    reloadButton.type = 'button';
    reloadButton.className = 'sketch-action-button sketch-reload-button';
    reloadButton.textContent = 'Reload';
    reloadButton.setAttribute('aria-label', 'Reload sketch');
    applyButtonStyle(reloadButton);
    addReloadBehavior(reloadButton, iframe, folder);
    iframeWrap.appendChild(reloadButton);

    return iframeWrap;
  }

  function createCodeBlock() {
    const codeWrap = document.createElement('div');
    codeWrap.className = 'code-block-wrap';
    codeWrap.style.position = 'relative';
    codeWrap.style.margin = '0';

    const copyButton = document.createElement('button');
    copyButton.type = 'button';
    copyButton.className = 'sketch-action-button sketch-copy-button';
    copyButton.textContent = 'Copy';
    copyButton.setAttribute('aria-label', 'Copy code to clipboard');
    applyButtonStyle(copyButton);
    codeWrap.appendChild(copyButton);

    const pre = document.createElement('pre');
    pre.style.margin = '0';
    pre.style.width = '100%';
    pre.style.minHeight = '400px';

    const code = document.createElement('code');
    code.id = 'code-block';
    code.className = 'language-javascript';
    code.style.display = 'block';

    pre.appendChild(code);
    codeWrap.appendChild(pre);

    addCopyBehavior(copyButton, code);

    return { codeWrap, code };
  }

  function insertBlock(container, insertionParent, insertionTarget, main) {
    if (insertionTarget) {
      insertionParent.insertBefore(container, insertionTarget);
    } else {
      main.appendChild(container);
    }
  }

  // horizontal layout (code left, canvas right)
  function loadCodeBlock(folder, anchorId) {
    const resolvedFolder = resolveFolder(folder);
    if (!resolvedFolder) return;

    const insertion = getInsertionTarget(anchorId);
    if (!insertion) return;

    fetchSketchSource(resolvedFolder)
      .then(function (source) {
        const canvasSize = parseCanvasSize(source);
        const canvasWidth = canvasSize ? canvasSize.width : 400;
        const canvasHeight = canvasSize ? canvasSize.height : 400;
        const useHorizontal = canvasWidth <= 400;

        const iframeWrap = createIframeBlock(resolvedFolder);
        const iframe = iframeWrap.querySelector('iframe');
        if (iframe) {
          iframe.setAttribute('height', String(canvasHeight));
        }

        const codeBlock = createCodeBlock();

        if (useHorizontal) {
          const rowWrap = document.createElement('div');
          rowWrap.style.display = 'flex';
          rowWrap.style.flexWrap = 'nowrap';
          rowWrap.style.alignItems = 'flex-start';
          rowWrap.style.gap = '10px';
          rowWrap.style.margin = '10px 0';

          iframeWrap.style.flex = '0 0 ' + canvasWidth + 'px';
          iframeWrap.style.width = canvasWidth + 'px';
          iframeWrap.style.maxWidth = '100%';

          codeBlock.codeWrap.style.flex = '0 0 390px';
          codeBlock.codeWrap.style.width = '390px';
          codeBlock.codeWrap.style.maxWidth = '100%';

          rowWrap.appendChild(codeBlock.codeWrap);
          rowWrap.appendChild(iframeWrap);
          insertBlock(rowWrap, insertion.insertionParent, insertion.insertionTarget, insertion.main);
        } else {
          const stackWrap = document.createElement('div');
          stackWrap.style.margin = '10px 0';
          stackWrap.style.width = canvasWidth + 'px';
          stackWrap.style.maxWidth = '100%';

          iframeWrap.style.margin = '0 0 10px 0';
          iframeWrap.style.width = canvasWidth + 'px';
          iframeWrap.style.maxWidth = '100%';

          codeBlock.codeWrap.style.width = canvasWidth + 'px';
          codeBlock.codeWrap.style.maxWidth = '100%';

          stackWrap.appendChild(iframeWrap);
          stackWrap.appendChild(codeBlock.codeWrap);
          insertBlock(stackWrap, insertion.insertionParent, insertion.insertionTarget, insertion.main);
        }

        applyCodeText(codeBlock.code, source);
      })
      .catch(function (error) {
        console.error('Failed to load code:', error);
      });
  }

  // stacked layout (iframe top, code block full width below)
  function loadCodeBlockWide(folder, anchorId) {
    const resolvedFolder = resolveFolder(folder);
    if (!resolvedFolder) return;

    const insertion = getInsertionTarget(anchorId);
    if (!insertion) return;

    const stackWrap = document.createElement('div');
    stackWrap.style.margin = '10px 0';
    stackWrap.style.width = '800px';
    stackWrap.style.maxWidth = '100%';

    const iframeWrap = createIframeBlock(resolvedFolder);
    iframeWrap.style.margin = '0 0 10px 0';
    iframeWrap.style.width = '800px';
    iframeWrap.style.maxWidth = '100%';

    const codeBlock = createCodeBlock();
    codeBlock.codeWrap.style.width = '800px';
    codeBlock.codeWrap.style.maxWidth = '100%';

    stackWrap.appendChild(iframeWrap);
    stackWrap.appendChild(codeBlock.codeWrap);

    insertBlock(stackWrap, insertion.insertionParent, insertion.insertionTarget, insertion.main);
    fetchSketchSource(resolvedFolder)
      .then(function (source) {
        applyCodeText(codeBlock.code, source);
      })
      .catch(function (error) {
        console.error('Failed to load code:', error);
      });
  }

  window.loadCodeBlock = loadCodeBlock;
  window.loadCodeBlockWide = loadCodeBlockWide;
})();
