showBlock = id => {
    document.getElementById(id).style.display = 'block';
    document.getElementById('background').style.display = 'block';
  };


hideBlock = (class_name) => {
    Array.from(document.querySelectorAll('.block_news')).forEach(item => item.style.display = 'none')
    document.getElementById('background').style.display = 'none';
}