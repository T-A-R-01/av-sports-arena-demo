export const INFO = {
  name: 'AV Sports Arena & Cafe',
  address: 'Hatkesh Rd, Udyog Nagar, Mira Road East, Mira Bhayandar, Maharashtra 401107',
  phone: '098330 12312', tel: 'tel:09833012312', hours: 'Open 24 Hours', price: '₹200–800 / person',
  ig: 'https://www.instagram.com/av.sportsarena?stkn=MXg3MzcyZ3JuamQzbg==',
  maps: 'https://share.google/qjxcvfyBgiEK3V4sa',
}
export const MAP_EMBED = 'https://www.google.com/maps?q=' + encodeURIComponent('AV Sports Arena & Cafe, ' + INFO.address) + '&output=embed'
const i = (f) => '/images/' + f
export const IMG = { logo: i('logo.jpeg'), hero: i('hero.jpeg'), storefront: i('storefront.jpeg'), player: i('player.jpeg'), hallTop: i('hall-top.jpeg'), gaming: i('gaming.jpeg'), hallDark: i('hall-dark.jpeg'), shot: i('shot.jpeg'), rack: i('rack.jpeg') }
// Facilities are taken from the venue's own storefront signage.
export const OFFERINGS = ['Snooker', 'Pool & Billiards', 'PlayStation 5', 'Streaming Studio', 'Café', 'Locker Facility', 'Lounge Area']
export const GALLERY = [
  { src: IMG.hero, alt: 'Snooker hall with lantern lighting', big: true }, { src: IMG.rack, alt: 'Snooker frame set up' },
  { src: IMG.gaming, alt: 'Gaming setup with RGB lighting' }, { src: IMG.hallTop, alt: 'View over the snooker tables' },
  { src: IMG.player, alt: 'Player lining up a shot' }, { src: IMG.shot, alt: 'Full-size table under the canopy light' },
  { src: IMG.hallDark, alt: 'Row of tables on the checkered floor' }, { src: IMG.storefront, alt: 'AV Sports Arena & Cafe entrance' },
]
