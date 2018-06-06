export const CHANGE_TYPES = {
  NEXT: 'next',
  PLAY: 'play',
  SHUFFLE: 'shuffle',
  PREV: 'prev'
}

export const PLAY_STATUS = {
  INIT: 'init',
  PLAYING: 'playing',
  PAUSED: 'paused',
  END: 'end'
}

export const GENRES = [
  'chill',
  'deep',
  'dubstep',
  'house',
  'tropical'
]

export const GENRES_MAP = (() => {
    let result = {}
    GENRES.forEach((genre) => {
        result[genre] = 1
    })
    return result
})()
