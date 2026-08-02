import { ProjectGenerator } from "./ProjectGenerator.js"

export class CliApplication {
    async run(argv: string[]): Promise<boolean> {

        const command: string = argv[2];
        const projectName: string = argv[3];

        switch (command) {
            case "create": {

                return await ProjectGenerator.create(projectName);
            }
            case "help": {

                if (typeof argv[4] === "string") {
                    CliApplication.showCommandGuide(argv[4]);
                    break;
                }

                console.log("Usage: jsinx <command> <subcommand> <options>");
                console.log("Type jsinx help <command> to get info about command");
                break;
            }

            default:
                console.log("Unknown command");
        }

        return true;
    }

    private static showCommandGuide(command: string): void {

        switch (command) {
            case "create": {
                console.log(`
Usage:
  jsinx create <projectName> [options]

Description:
  Creates a new backend project with Docker environment.

Options:

  --nginx
      Creates nginx.conf and adds NGINX container.

  --postgres
      Adds PostgreSQL database container.

  --express
      Creates Express.js backend.

  --typescript
      Enables TypeScript support.

Examples:

  jsinx create my-api

  jsinx create my-api --nginx --postgres --express
            `);

                break;
            }
            case "add": {

                console.log(`
Usage:
  jsinx add <service>

Available services:

  nginx
  postgres
  redis
  mongodb

Examples:

  jsinx add redis
            `);

                break;
            }
            default: {
                console.log("Unknown command");
            }
        }
    }
}