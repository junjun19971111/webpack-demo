function Header(){
  const dom = document.getElementById('root');
  const head = document.createElement('div');
  head.innerHTML = 'This is Header';
  dom.append(head);
}
// export default Header;
module.exports = Header;