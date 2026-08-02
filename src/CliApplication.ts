import { ProjectGenerator } from "./ProjectGenerator.js"

export class CliApplication {
    async run(argv: string[]): Promise<boolean> {
        
        const command: string = argv[2];
        const projectName: string = argv[3];

        switch(command) {
            case "create": {

                return await ProjectGenerator.create(projectName);
                break;
            }

            default:
                console.log("Unknown command");
        }

        return true;
    }
}