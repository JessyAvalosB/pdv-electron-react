import onScan from 'onscan.js';

export const initOnScan = (handleScanned) => {
    // Initialize with options
    if (!onScan.isAttachedTo(document)) {
        onScan.attachTo(document, {
            suffixKeyCodes: [13], // enter-key expected at the end of a scan
            reactToPaste: true, // Compatibility to built-in scanners in paste-mode (as opposed to keyboard-mode)
            onScan: function (sCode, iQty) { // Alternative to document.addEventListener('scan')
                handleScanned(sCode);
            },
            onKeyDetect: function (iKeyCode) { // output all potentially relevant key events - great for debugging!
                // console.log('Pressed: ' + iKeyCode);
            }
        });
    }
};

export const detachOnScan = () => {
    if (onScan.isAttachedTo(document)) {
        onScan.detachFrom(document);
    }
};