const Game = require('../src/Game.js');

let game;

beforeEach(() => {
    game = new Game();
})

test('test if score returns 0 without any rolls', () => {
    expect(
    game.score()).toBe(0);
  });

test('test if score returns 20 after 2 rolls of 10', () => {
    game.roll(10);
    game.roll(10);
    expect(
    game.score()).toBe(30);
  });

test('test if score returns 1 after 1 roll of 1', () => {
    game.roll(1);
    expect(
    game.score()).toBe(1);
  });

test('test if score returns 2 after 2 rolls of 1', () => {
    game.roll(1);
    game.roll(1);
    expect(
    game.score()).toBe(2);
  });

test('test if score returns 16 after spare then 3', () => {  
    game.roll(5);
    game.roll(5);
    game.roll(3);
    expect(
    game.score()).toBe(16);
  });

test('test if score returns 4 after strike then 1 and 1', () => {  
    game.roll(10);
    game.roll(1);
    game.roll(1);
    expect(
    game.score()).toBe(14);
  });

test('test if score returns 300 after 12 strikes', () => {  
    for (let i = 0; i < 12; i++) {
        game.roll(10);
    }
    expect(
    game.score()).toBe(300);
  });

test('test if score returns 285 after 10 strikes and 5 and 5', () => {  
    for (let i = 0; i < 10; i++) {
        game.roll(10);
    }
    game.roll(5);
    game.roll(5);
    expect(
    game.score()).toBe(285);
  });

test('test if score returns 48 after 9 times 2 and a spare on last', () => {  
    for (let i = 0; i < 9; i++) {
        game.roll(2);
        game.roll(2);
    }
    game.roll(5);
    game.roll(5);
    game.roll(2);
    expect(
    game.score()).toBe(48);
  });
  test('test if score returns 270 after 10 strikes and 0 and 0', () => {  
    for (let i = 0; i < 10; i++) {
        game.roll(10);
    }
    game.roll(0);
    game.roll(0);
    expect(
    game.score()).toBe(270);
  });
