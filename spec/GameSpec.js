"use strict";

describe('Game', function() {
  var game;
  var frame;
  beforeEach(function() {
    game = new Game();
    frame = jasmine.createSpy('frame');
  });

  it('has a starting score of 0', function() {
    expect(game.score).toEqual(0);
  });

  it('starts off with no frames', function() {
    expect(game._frames).toEqual([]);
  });

  it('adds frames to the game', function() {
    game.addFrames(frame);
    expect(game._frames).toEqual([frame]);
  });

  it('updates score', function() {
    
  })

});
