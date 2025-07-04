import { registerRootComponent } from 'expo';
import { Platform } from 'react-native';
import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import App from './App';
import schema, { dbSchema } from './model/schema';
import migrations from './model/migrations';
import HighPurityMaterial from './model/modelClasses/HighPurityMaterial';
import RawMaterialVendors from './model/modelClasses/RawMaterialVendors';
import RawMaterialLogs from './model/modelClasses/RawMaterialLog';

// import Post from './model/Post' // ⬅️ You'll import your Models here

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
    schema: dbSchema,
    // (You might want to comment it out for development purposes -- see Migrations documentation)
    //migrations,
    // (optional database name or file system path)
    // dbName: 'myapp',
    // (recommended option, should work flawlessly out of the box on iOS. On Android,
    // additional installation steps have to be taken - disable if you run into issues...)
    jsi: true, /* Platform.OS === 'ios' */
    // (optional, but you should implement this method)
    onSetUpError: error => {
      // Database failed to load -- offer the user to reload the app or log out
    }
  });

// Then, make a Watermelon database from it!
const database = new Database({
    adapter,
    modelClasses: 
    [
        HighPurityMaterial,
        RawMaterialVendors,
        RawMaterialLogs,
    ],    
  });


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
