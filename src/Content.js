function Content(){
  const dom = document.getElementById('root');
  const content = document.createElement('div');
  content.innerHTML = 'This is Content';
  dom.append(content);
}
// export default Content;
module.exports = Content;