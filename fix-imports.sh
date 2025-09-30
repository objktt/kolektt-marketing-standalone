#!/bin/bash

echo "Fixing import paths for standalone project..."

# Replace ~ with @
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|~/components|@/components|g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|~/config|@/config|g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|~/lib|@/lib|g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|~/styles|@/styles|g'

# Remove @saasfly/ui imports and replace with local
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's|@saasfly/ui|@/components/ui|g'

echo "Import paths fixed!"