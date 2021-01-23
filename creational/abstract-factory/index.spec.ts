import { expect } from "chai";
import "mocha";
import FacebookFactory from "./src/factories/facebook/facebook-factory";
import FacebookConnector from "./src/factories/facebook/facebook-connector";
import FacebookPublisher from "./src/factories/facebook/facebook-publisher";
import InstagramFactory from "./src/factories/instagram/instagram-factory";
import InstagramConnector from "./src/factories/instagram/instagram-connector";
import InstagramPublisher from "./src/factories/instagram/instagram-publisher";
import LinkedinFactory from "./src/factories/linkedin/linkedin-factory";
import LinkedinConnector from "./src/factories/linkedin/linkedin-connector";
import LinkedinPublisher from "./src/factories/linkedin/linkedin-publisher";

const facebookFactory = new FacebookFactory();
const instagramFactory = new InstagramFactory();
const linkedinFactory = new LinkedinFactory();

describe("Facebook - Publisher", () => {
  it("it must be a Facebbook conector", () => {
    expect(true).to.equal(
      facebookFactory.getConnector() instanceof FacebookConnector
    );
  });
  it("it must be a Facebook publisher", () => {
    const connector = facebookFactory.getConnector();
    expect(true).to.equal(
      facebookFactory.getPublisher(connector) instanceof FacebookPublisher
    );
  });
});

describe("Instagram - Publisher", () => {
  it("it must be a Instagram conector", () => {
    expect(true).to.equal(
      instagramFactory.getConnector() instanceof InstagramConnector
    );
  });
  it("it must be a Instagram publisher", () => {
    const connector = instagramFactory.getConnector();
    expect(true).to.equal(
      instagramFactory.getPublisher(connector) instanceof InstagramPublisher
    );
  });
});

describe("Linkedin - Publisher", () => {
  it("it must be a Linkedin connector", () => {
    expect(true).to.equal(
      linkedinFactory.getConnector() instanceof LinkedinConnector
    );
  });

  it("it must be a Linedin Publisher", () => {
    const connector = linkedinFactory.getConnector();
    expect(true).to.equal(
      linkedinFactory.getPublisher(connector) instanceof LinkedinPublisher
    );
  });
});
