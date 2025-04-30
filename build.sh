#!/bin/bash

echo "👉 Compiling TypeScript..."
npx tsc

if [ $? -ne 0 ]; then
  echo "❌ TypeScript compilation failed. Fix the errors and try again."
  exit 1
fi

echo "✅ TypeScript compiled."

echo "📦 Building WAR package..."
jar cvf TomaBankUI.war -C webapp/ .

echo "✅ WAR file created: TomaBankUI.war"
echo "💡 You can now deploy it to your Tomcat webapps/ folder."