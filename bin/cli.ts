

export class ProjectGenerator {
    createFolders(): boolean {

        return true;
    }

    createTemplates(): boolean {


        return true;
    }

    renderTemplates(): boolean {

        return true;
    }

    installDependencies(): boolean {

        return true;
    }

    finish(): void {

    }

    async run(): Promise<boolean> {
        return true;
    }
}

const generator = new ProjectGenerator();

await generator.run();