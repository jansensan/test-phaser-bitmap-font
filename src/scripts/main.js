(function () {

  'use strict';


  // constants
  var Chicago = {
    name: 'Chicago',
    spriteSheet: 'assets/chicago-extended.png',
    data: 'assets/chicago-extended.xml',
    size: 12
  };
  var LIPSUM = "The quick brown fox jumps over the lazy dog." + "\n" +
    "JUNK MTV QUIZ GRACED BY FOX WHELPS" + "\n" +
    "sex-charged fop blew my junk tv quiz" + "\n" +
    "The time is 16:48 o'clock." + "\n" +
    "http://www.phaser.io" + "\n" +
    ",.!?/:;'\"#_+=()%~*" + "\n" +
    "\n" +
    "Kerning:\n" +
    "F. P. T. F, P, T, L'" + "\n" +
    "Aj Bj Cj Dj Ej Fj Gj Hj Ij Jj Kj Lj Mj Nj Oj Pj Qj Rj Sj Tj Uj Vj Wj Xj Yj Zj" + "\n" +
    "aj bj cj dj ej fj gj hj ij jj kj lj mj nj oj pj qj rj sj tj uj vj wj xj yj zj" + "\n" +
    "\n" +
    "Problematic characters:\n" +
    "- Punctuation: ×÷±–…“”‘’" + "\n" +
    "- Accented A's: àáâäåãāæ ÀÁÂÄÅÃĀÆ" + "\n" +
    "- Accented E's: èéêëėęē ÈÉÊËĖĘĒ" + "\n" +
    "- Accented I's: ìíîï ÌÍÎÏ" + "\n" +
    "- Accented O's: òóôöøõōœ ÒÓÔÖØÕŌŒ" + "\n" +
    "- Accented U's: ùúûüū ÙÚÛÜŪ" + "\n" +
    "- Accented Y's and C's: ÿŸ çÇ";
  var TO_KERN = "aîa bîb cîc dîd eîe fîf gîg hîh iîi jîj kîk lîl mîm\n" +
    "nîn oîo pîp qîq rîr sîs tît uîu vîv wîw xîx yîy zîz\n" +
    "àîà áîá âîâ äîä åîå äîä ãîã āîā āîā æîæ\n" +
    "AîA BîB CîC DîD EîE FîF GîG HîH IîI JîJ KîK LîL MîM\n" +
    "NîN OîO PîP QîQ RîR SîS TîT UîU VîV WîW XîX YîY ZîZ\n" +
    "ÀîÀ ÁîÁ ÂîÂ ÄîÄ ÅîÅ ÃîÃ ĀîĀ ÆîÆ\n" +

    "aÎa bÎb cÎc dÎd eÎe fÎf gÎg hÎh iÎi jÎj kÎk lÎl mÎm\n" +
    "nÎn oÎo pÎp qÎq rÎr sÎs tÎt uÎu vÎv wÎw xÎx yÎy zÎz\n" +
    "àÎà áÎá âÎâ äÎä åÎå äÎä ãÎã āÎā āÎā æÎæ\n" +
    "AÎA BÎB CÎC DÎD EÎE FÎF GÎG HÎH IÎI JÎJ KÎK LÎL MÎM\n" +
    "NÎN OÎO PÎP QÎQ RÎR SÎS TÎT UÎU VÎV WÎW XÎX YÎY ZÎZ\n" +
    "ÀÎÀ ÁÎÁ ÂÎÂ ÄÎÄ ÅÎÅ ÃÎÃ ĀÎĀ ÆÎÆ\n" +

    "aïa bïb cïc dïd eïe fïf gïg hïh iïi jïj kïk lïl mïm\n" +
    "nïn oïo pïp qïq rïr sïs tït uïu vïv wïw xïx yïy zïz\n" +
    "àïà áïá âïâ äïä åïå äïä ãïã āïā āïā æïæ\n" +
    "AïA BïB CïC DïD EïE FïF GïG HïH IïI JïJ KïK LïL MïM\n" +
    "NïN OïO PïP QïQ RïR SïS TïT UïU VïV WïW XïX YïY ZïZ\n" +
    "ÀïÀ ÁïÁ ÂïÂ ÄïÄ ÅïÅ ÃïÃ ĀïĀ ÆïÆ\n" +

    "aÏa bÏb cÏc dÏd eÏe fÏf gÏg hÏh iÏi jÏj kÏk lÏl mÏm\n" +
    "nÏn oÏo pÏp qÏq rÏr sÏs tÏt uÏu vÏv wÏw xÏx yÏy zÏz\n" +
    "àÏà áÏá âÏâ äÏä åÏå äÏä ãÏã āÏā āÏā æÏæ\n" +
    "AÏA BÏB CÏC DÏD EÏE FÏF GÏG HÏH IÏI JÏJ KÏK LÏL MÏM\n" +
    "NÏN OÏO PÏP QÏQ RÏR SÏS TÏT UÏU VÏV WÏW XÏX YÏY ZÏZ\n" +
    "ÀÏÀ ÁÏÁ ÂÏÂ ÄÏÄ ÅÏÅ ÃÏÃ ĀÏĀ ÆÏÆ"


  // vars
  var _game, _textField;


  // auto initialization
  init();


  // methods definitions
  function init() {
    // create game object
    _game = new Phaser.Game(
      480, 320,
      Phaser.CANVAS,
      'gameCanvas',
      {
        preload: preload,
        create: create,
        update: update
      }
    );
  }

  function preload() {
    _game.load.bitmapFont(
      Chicago.name,
      Chicago.spriteSheet,
      Chicago.data
    );
  }

  function create() {
    // set background color
    _game.stage.backgroundColor = '#141414';

    // scale the game
    var scale = 2;
    _game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    _game.scale.setUserScale(scale, scale);

    // enable crisp rendering
    _game.renderer.renderSession.roundPixels = true;
    Phaser.Canvas.setImageRenderingCrisp(_game.canvas);

    // add textfield
    _textField = _game.add.bitmapText(
      16, 16, // x, y
      Chicago.name,
      LIPSUM,
      Chicago.size
    );
  }

  function update() {}

})();
