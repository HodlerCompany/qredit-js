/** @module networks */

module.exports = {
  /** @type {Network} */
  qredit: {
    messagePrefix: '\x18Qredit Signed Message:\n',
    bip32: {
      public: 0x43587cf, // base58 will have a prefix 'qpub'
      private: 0x4358394 // base58Priv will have a prefix 'qpriv'
    },
    name: 'mainnet',
    nethash: '5e67037fd290ba7ab378e84a591d251c46eb9770eb134983771fd602233bf193',
    token: 'Qredit',
    symbol: 'XQR',
    pubKeyHash: 0x3a, // Addresses will begin with 'Q'
    explorer: 'http://185.85.18.192:4200',
    wif: 0xbb, // Network prefix for wif generation
    activePeer: {
      ip: '185.85.18.192',
      port: 4100
    },
    peers: [

    ],
  },
  /** @type {Network} */
  bitcoin: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    wif: 0x80
  }
}
