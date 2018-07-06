/* global $, rooms, verbs, items */
$(document).ready(function () {
  var inventory = []
  var currentRoom = 1
  displayText(createRoomText(currentRoom))
  $('#cli').focus()
  $('#cli').bind('enterKey', function (e) {
    processAction(processInput())
  })
  $('#cli').keyup(function (e) {
    if (e.keyCode === 13) {
      $(this).trigger('enterKey')
    }
  })
})
function processInput () {
  var input = $('#cli').val()
  $('#cli').val('')
  var json = {}
  json.raw = input

  // Input: VERB room|item|my item [with my item|item|]
  var regex = /([^\s]+)\s(my\s[^\s]+|[^\s]+)\s(with\s)?(.*)/gi
  var match = regex.exec(input + '\n')
  json.verb = match[1] // TODO: match against verbs for id
  json.item = {}
  if (match[2].startsWith('my')) {
    json.item.inventory = true
    json.item.id = match[2].split(' ')[1] // TODO: search items for id
  } else {
    json.item.inventory = false
    json.item.id = match[2] // TODO: search items for id
  }
  if (match[3]) {
    json.with = {}
    if (match[4].startsWith('my')) {
      json.with.inventory = true
      json.with.id = match[4].split(' ')[1] // TODO: search items for id
    } else {
      json.with.inventory = false
      json.with.id = match[4] // TODO: search items for id
    }
  }
  return json
}
function processAction (input) {
  displayText(input.verb)
}
function displayText (text) {
  $('#text').html(text)
}
function createRoomText (roomid) {
  var text = rooms[roomid].title
  text += '<br/><br/>'
  text += rooms[roomid].text
  text += '<br/><br/>'
  text += 'Das liegt hier herum:<br/>'
  text += '<ul>'
  rooms[roomid].items.forEach(item => {
    text += '<li>'
    text += items[item].title
    text += '</li>'
  })
  text += '</ul>'
  text += '<br/><br/>'
  text += 'Ausgänge:<br/>'
  text += '<ul>'
  rooms[roomid].rooms.forEach(room => {
    text += '<li>'
    text += rooms[room].title
    text += '</li>'
  })
  return text
}
