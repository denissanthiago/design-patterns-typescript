// call to publisher instance
import FacebookFactory from "./src/factories/facebook/facebook-factory";
import Publisher from "./src/publisher";
import InstagramFactory from "./src/factories/instagram/instagram-factory";
import LinkedinFactory from "./src/factories/linkedin/linkedin-factory";

const content = "Contenido a publicar";

const publisher = new Publisher(content);

publisher.send(new FacebookFactory());
publisher.send(new InstagramFactory());
publisher.send(new LinkedinFactory());
