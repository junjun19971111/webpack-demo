function Footer(){
  const dom = document.getElementById('root');
  const foot = document.createElement('div');
  foot.innerHTML = 'This is Footer';
  dom.append(foot);
}
// export default Footer;
module.exports = Footer;