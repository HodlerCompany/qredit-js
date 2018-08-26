/* global describe, it */

var assert = require('assert')
var bigi = require('bigi')
var qreditjs = require('../../')

describe('qredit-js (basic)', function () {
  it('can generate a random qredit address', function () {
    // for testing only
    function rng () { return new Buffer('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz') }

    // generate random keyPair
    var keyPair = qreditjs.ECPair.makeRandom({ rng: rng })
    var address = keyPair.getAddress()

    assert.strictEqual(address, 'PFcf1hqNTDTGC89aUbzY3f4AkrKKupteyH')
  })

  it('can generate an address from a SHA256 hash', function () {
    var hash = qreditjs.crypto.sha256('correct horse battery staple')
    var d = bigi.fromBuffer(hash)

    var keyPair = new qreditjs.ECPair(d)
    var address = keyPair.getAddress()

    assert.strictEqual(address, 'P8tUQFFbKTk7BWohwwScnwTY3mjorGbBrv')
  })

  it('can generate a random keypair for alternative networks', function () {
    // for testing only
    function rng () { return new Buffer('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz') }

    var bitcoin = qreditjs.networks.bitcoin

    var keyPair = qreditjs.ECPair.makeRandom({ network: bitcoin, rng: rng })
    var wif = keyPair.toWIF()
    var address = keyPair.getAddress()

    assert.strictEqual(address, '182UrjSXQHy5DHUp8Xg1Nm5u979SojJY2P')
    assert.strictEqual(wif, 'L1Knwj9W3qK3qMKdTvmg3VfzUs3ij2LETTFhxza9LfD5dngnoLG1')
  })

  it('can import an address via WIF', function () {
    var keyPair = qreditjs.ECPair.fromWIF('S9aCCSFvm8kNeyFb1t6pLb5oJs9tv96ag6uA8Du6UM7zsmsNHQiz')
    var address = keyPair.getAddress()

    assert.strictEqual(address, 'PVB1zsuWTTWEBGSSGsaQ8eDjTVy475WJq8')
  })

})
