/**
 * Button to display live stream
 * @param {videojs.Player|Object} player
 * @param {Object=} options
 * @class
 * @constructor
 */

videojs.LiveButton = videojs.Button.extend({
  /** @constructor */
  init: function(player, options){
    console.log('init live button');
    videojs.Button.call(this, player, options);
    this.player_ = player;
    this.buttonText = 'hello';

    player.on('loadedmanifest', videojs.bind(this, this.onManifestLoaded));
  }
});

videojs.LiveButton.prototype.buttonText = 'LIVE';

videojs.LiveButton.prototype.buildCSSClass = function(){
  console.log('build css');
  return 'vjs-control vjs-live-button';
}

videojs.LiveButton.prototype.onManifestLoaded = function(){
  console.log('received onManifestLoaded');
  console.log(this.player_.hls.media);
  if (this.player_.hls && this.player_.hls.media &&
      !this.player_.hls.media.endList)
  {
    this.show();
  } else {
    this.hide();
  }
};