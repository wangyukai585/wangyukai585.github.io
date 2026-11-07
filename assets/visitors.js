// Reuse this website's original MapMyVisitors counter. Local previews do not count.
if (window.location.hostname === 'wangyukai585.github.io') {
  const script = document.createElement('script');
  script.id = 'mapmyvisitors';
  script.src = 'https://mapmyvisitors.com/map.js?cl=c8d3df&w=a&t=tt&d=qyy9M7Z56cizovL7_uab9oWhsHor6y5BKyxW5Al-8qY&co=ffffff&ct=000000&cmo=ff4444&cmn=1772d0';
  script.async = true;
  document.getElementById('visitor-map').appendChild(script);
}
