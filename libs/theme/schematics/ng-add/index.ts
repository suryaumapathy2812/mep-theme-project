import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addPackageJsonDependency, NodeDependencyType } from '@schematics/angular/utility/dependencies';

// Just return the tree
export function ngAdd(options: any): Rule {
    console.log(options);
    return (tree: Tree, context: SchematicContext) => {

        console.log("Adding Bootstrap Dependencies");
        addPackageJsonDependency(tree, { name: 'tailwindcss', version: '^3.0.2', type: NodeDependencyType.Dev });
        addPackageJsonDependency(tree, { name: '@tailwindcss/forms', version: '^0.4.0', type: NodeDependencyType.Default })
        addPackageJsonDependency(tree, { name: '@tailwindcss/typography', version: '^0.5.0', type: NodeDependencyType.Default })
        addPackageJsonDependency(tree, { name: '@tailwindcss/aspect-ratio', version: '^0.4.0', type: NodeDependencyType.Default })
        addPackageJsonDependency(tree, { name: 'angular-feather', version: '^6.1.0', type: NodeDependencyType.Default })

        context.addTask(new NodePackageInstallTask());
        return tree;
    };
}