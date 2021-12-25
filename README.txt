npx create-nx-workspace@latest

cd mep

nx g @nrwl/angular:application testing --e2eTestRunner none --unitTestRunner none --style scss --skip-test --addTailwind 

nx g @nrwl/angular:library theme --prefix mep --unitTestRunner none --addTailwind --buildable --publishable --importPath @suryaumapathy@2812/mep-theme