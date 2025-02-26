document.addEventListener('DOMContentLoaded', function() {
    const docUrl = 'https://docs.google.com/document/d/e/2PACX-1vQe-zI9MNH5-Q8sUboXeuF4nJ3Y-nSjbK2YAyLv6IV6x3RHN-dC9pSB-gmb_AYooQE89d-Bv85PsIgj/pub?embedded=true';
    
    async function fetchDocContent() {
        try {
            const response = await fetch(docUrl);
            const text = await response.text();
            document.getElementById('doc-content').innerHTML = text;
        } catch (error) {
            console.error('Error fetching document content:', error);
            document.getElementById('doc-content').innerText = 'Failed to load content. Please try again later.';
        }
    }

    fetchDocContent();

    document.getElementById('download-pdf').addEventListener('click', function() {
        window.open(docUrl.replace('/pub?embedded=true', '/export?format=pdf'), '_blank');
    });

    document.getElementById('download-docx').addEventListener('click', function() {
        window.open(docUrl.replace('/pub?embedded=true', '/export?format=doc'), '_blank');
    });
});