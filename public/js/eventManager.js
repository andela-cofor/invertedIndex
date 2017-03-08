window.onload = function() {
  const invertedIndexUtilObj = new InvertedIndexUtil();
  const invertedObj = new InvertedIndex();
  const fileInput = document.getElementById('file');
  const wrongFiles = [];
  const wrnMessage = '  Invalid file upload';
  const files = [];
  const input = $('#file');
  const allFilesTile = invertedObj.allFilesTitle;
  $('#upload-btn').click(() => {
      Object.keys(fileInput.files).forEach((file) => {
        if(fileInput.files[file].type === 'application/json' && fileInput.files[file].size < 1) {
          wrongFiles.push(fileInput.files.name);
          document.getElementById('user-message').innerHTML
          = wrongFiles + wrnMessage;
        } if (fileInput.files[file].type === 'application/json') {
          files.push(fileInput.files[file]);
          invertedIndexUtilObj.jsonFileReader(fileInput.files[0], invertedObj);
        } else if (fileInput.files[file].name !== 'application/json') {
          wrongFiles.push(fileInput.files.name);
          document.getElementById('user-message').innerHTML
          = wrongFiles + wrnMessage;
        }
      });
    input.replaceWith(input.val(''));
  });

    $('#btn-create').on('click', () => {
      invertedIndexUtilObj.deleteTable();
      const bookName = $('#sFile').val();
      document.getElementById('user-message').innerHTML = '';
      document.getElementById('user-message1').innerHTML = '';
      let viewIndexFiles = invertedObj.allFiles;
      let viewIndexLength = invertedObj.allLength;
      if (bookName === 'All') {
        Object.keys(viewIndexFiles).forEach((keys) => {
          invertedIndexUtilObj.populateTable(viewIndexFiles[keys], keys, viewIndexLength[keys], allFilesTile);
        });
      } else {
        invertedIndexUtilObj.populateTable(viewIndexFiles[bookName],
        bookName, viewIndexLength[bookName], allFilesTile);
      }
    }); 
  $('#btn-search').click(() => {
    invertedIndexUtilObj.deleteTable();
    document.getElementById('user-message').innerHTML = '';
    document.getElementById('user-message1').innerHTML = '';
    const searchstring  = $('#search').val();
    const filterName = $('#sFile').val();
    const wordArray = searchstring.toLowerCase().match(/\w+/g);
    const viewIndexLength = invertedObj.allLength;
    const searchResult = invertedObj.searchFiles(wordArray, filterName);
    if (!searchstring) {
      document.getElementById('user-message').innerHTML = 'Type in a search';
    } else if (filterName === 'All') {
      Object.keys(searchResult).forEach((keys) => {
        invertedIndexUtilObj.populateTable(searchResult[keys],
        keys, viewIndexLength[keys], allFilesTile);
      });
    } else if (filterName !== 'All') {
      invertedIndexUtilObj.populateTable(searchResult[filterName],
      filterName, viewIndexLength[filterName], allFilesTile);
    }
  });
};
