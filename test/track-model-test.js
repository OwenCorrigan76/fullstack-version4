import { assert } from "chai";
import { db } from "../src/models/db.js";
// eslint-disable-next-line import/named
import { maggie, testTracks } from "./fixtures.js";

suite("User Model tests", () => {

    setup(async () => {
        db.init();
        await db.trackStore.deleteTrack();
        for (let i = 0; i < testTracks.length; i += 1) {
            // eslint-disable-next-line no-await-in-loop
            testTracks[i] = await db.trackStore.addTrack(testTracks[i]);
        }
    });
});