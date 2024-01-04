const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./kirby_sprite.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.init(ctx);

	gameEngine.addEntity(new Kirby(gameEngine, 10, 10, ASSET_MANAGER.getAsset("./kirby_sprite.png")));

	gameEngine.start();
});
