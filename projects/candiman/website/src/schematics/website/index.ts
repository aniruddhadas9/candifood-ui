import {
  apply,
  MergeStrategy,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  template,
  Tree,
  url,
  FileEntry, forEach, chain, noop
} from '@angular-devkit/schematics';
import {join, normalize} from 'path';
import {getWorkspace} from '@schematics/angular/utility/config';
import {addPackageJsonDependency, NodeDependency, NodeDependencyType} from "@schematics/angular/utility/dependencies";
import {Index} from "../utils";

export function setupOptions(host: Tree, options: any): Tree {
  const workspace = getWorkspace(host);
  if (!options.project) {
    options.project = Object.keys(workspace.projects)[0];
  }
  const project = workspace.projects[options.project];

  options.path = join(normalize(project.root), 'src');
  return host;
}

export function website(_options: any): Rule {
  console.log('info', `🚫🚫🚫🚫️ Added 🚫🚫🚫🚫 "${_options}" provided`);
  const maker = new Index();
  return chain([
    _options && _options.skipPackageJson ? noop() : maker.addPackageJsonDependencies(),
    _options && _options.skipPackageJson ? noop() : maker.installPackageJsonDependencies(),
    _options && _options.skipModuleImport ? noop() : maker.addModuleToImports(_options),
    (tree: Tree, _context: SchematicContext) => {
      setupOptions(tree, _options);

      const movePath = normalize(_options.path + '/');
      const templateSource = apply(url('./files/src'), [
        template({..._options}),
        move(movePath),
        // fix for https://github.com/angular/angular-cli/issues/11337
        forEach((fileEntry: FileEntry) => {
          if (tree.exists(fileEntry.path)) {
            tree.overwrite(fileEntry.path, fileEntry.content);
          }
          return fileEntry;
        }),
      ]);
      const rule = mergeWith(templateSource, MergeStrategy.Overwrite);
      return rule(tree, _context);
    }
  ]);
}
