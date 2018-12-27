import PouchDB from "pouchdb-core";
PouchDB.plugin(require("pouchdb-adapter-asyncstorage").default);
PouchDB.plugin(require("pouchdb-find").default);
PouchDB.plugin(require("pouchdb-silverlining"));

var MyDatabase = PouchDB.defaults({
  adapter: "asyncstorage"
});

const evaluationDB = { 
  db: new MyDatabase("evaluation")
};

var DatabaseHelper = function() {
  return {
    info: () => {
      return this.db.info();
    },
    delete: name => {
      return this.db.get(name).then(function(doc) {
        return this.db.remove(doc);
      });
    },
    sync: syncdata => {
      return this.db.bulkDocs(syncdata);
    },
    sql: sql => {
      return this.db.sql(sql);
    },
    insert: (data) => {
      return this.db.post(data);
    }
  };
};

var evaluationDBHelper = DatabaseHelper.bind(evaluationDB);

export { evaluationDBHelper };

/**
 * evaluationDBHelper()
      .insert({ name: "ssssss", _id: "name" })
      .then(info => {
        console.log(info);
      })
      .catch((err) => {
        console.log(err);
      });

    evaluationDBHelper()
      .sql('SELECT name FROM evaluation')
      .then(info => {
        console.log(info);
      });
 */
