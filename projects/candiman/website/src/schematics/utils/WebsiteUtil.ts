import {
  Rule,
  SchematicContext,
  Tree,
} from '@angular-devkit/schematics';

// import * as ts from 'typescript';
import {addPackageJsonDependency, NodeDependency, NodeDependencyType} from "@schematics/angular/utility/dependencies";
import {NodePackageInstallTask} from '@angular-devkit/schematics/tasks';
import {getWorkspace} from "@schematics/angular/utility/config";
// import {addImportToModule} from "@schematics/angular/utility/ast-utils";
import {getProject} from "@schematics/angular/utility/project";
import {
  getProjectMainFile
} from "@angular/cdk/schematics";
import {getAppModulePath} from "@schematics/angular/utility/ng-ast-utils";

export class WebsiteUtil {


  public addPackageJsonDependencies(): Rule {
    return (tree: Tree, _context: SchematicContext) => {
      const dependencies: NodeDependency[] = [
        {type: NodeDependencyType.Default, version: '~4.3.1', name: 'bootstrap'},
        {type: NodeDependencyType.Default, version: '~4.1.0', name: '@ng-bootstrap/ng-bootstrap'},
        {type: NodeDependencyType.Default, version: '~0.3.0', name: '@fortawesome/angular-fontawesome'},
        {type: NodeDependencyType.Default, version: '~1.2.17', name: '@fortawesome/fontawesome-svg-core'},
        {type: NodeDependencyType.Default, version: '~5.8.1', name: '@fortawesome/free-brands-svg-icons'},
        {type: NodeDependencyType.Default, version: '~5.8.1', name: '@fortawesome/free-regular-svg-icons'},
        {type: NodeDependencyType.Default, version: '~5.8.1', name: '@fortawesome/free-solid-svg-icons'}
      ];

      dependencies.forEach(dependency => {
        addPackageJsonDependency(tree, dependency);
        _context.logger.log('info', `✅️ Ani** Added "${dependency.name}" into ${dependency.type}`);
      });

      return tree;
    };
  }

  public installPackageJsonDependencies(): Rule {
    return (host: Tree, context: SchematicContext) => {
      context.addTask(new NodePackageInstallTask());
      context.logger.log('info', `🔍 Installing packages...`);

      return host;
    };
  }

  addModuleToImports(tree: Tree, options: any): Rule {
    return (host: Tree, context: SchematicContext) => {
      let project: any;
      const workspace = getWorkspace(host);
      project = getProject(workspace, options.project ? options.project : Object.keys(workspace['projects'])[0]);
      /*project = getProjectFromWorkspace(
        workspace,
        // Takes the first project in case it's not provided by CLI
        options.project ? options.project : Object.keys(workspace['projects'])[0]
      );*/

      const moduleName = 'WebsiteModule.forRoot({' +
        ' loginUrl: environment.restUrl/user/login,\n' +
        ' alertDelayInSeconds: 7\n' +
        '});';


      const modulePath = getAppModulePath(host, getProjectMainFile(project));
      const text = host.read(modulePath);
      context.logger.log('info', ''+ text);
      // const source = ts.createSourceFile(modulePath, text.toString('utf-8'), ts.ScriptTarget.Latest, true);

      // addModuleImportToModule(host, modulePath, moduleName, src);
      // addImportToModule(source, moduleName, 'angular-made-with-love', project);
      context.logger.log('info', `✅️ "${moduleName}" is imported`);

      return host;
    };
  }

  addPolyfillToScripts(options: any) {
    return (host: Tree, context: SchematicContext) => {
      const polyfillName = 'custom-elements';
      const polyfillPath = 'node_modules/@webcomponents/custom-elements/src/native-shim.js';

      try {
        const angularJsonFile = host.read('angular.json');

        if (angularJsonFile) {
          const angularJsonFileObject = JSON.parse(angularJsonFile.toString('utf-8'));
          const project = options.project ? options.project : Object.keys(angularJsonFileObject['projects'])[0];
          const projectObject = angularJsonFileObject.projects[project];
          const scripts = projectObject.targets.build.options.scripts;

          scripts.push({
            input: polyfillPath
          });
          host.overwrite('angular.json', JSON.stringify(angularJsonFileObject, null, 2));
        }
      } catch (e) {
        context.logger.log('error', `🚫 Failed to add the polyfill "${polyfillName}" to scripts`);
      }

      context.logger.log('info', `✅️ Added "${polyfillName}" polyfill to scripts`);

      return host;
    };
  }

  // export default function(options: any): Rule {
  // return chain([
  //   options && options.skipPackageJson ? noop() : addPackageJsonDependencies(),
  //   options && options.skipPackageJson ? noop() : installPackageJsonDependencies(),
  //   options && options.skipModuleImport ? noop() : addModuleToImports(options),
  //   options && options.skipPolyfill ? noop() : addPolyfillToScripts(options)
  // ]);
}
