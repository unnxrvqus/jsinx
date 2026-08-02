import fs from "fs/promises"

export class ProjectGenerator {
    static async create(projectName: string): Promise<boolean> {

        if(!projectName) {
            console.log("Project name is required");
            return false;
        }

        await fs.mkdir(projectName);
        console.log(`Porject ${projectName} created`);

        return true;
    }

    private async generateFolders(): Promise<boolean> { return true; }
}