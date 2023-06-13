//real object  (tem methods, tem nossa business logic no seu interior)
class Database {
    private uri: string;
    private provider: any;
    private connection: any;



    constructor(uri: string, provider: any) {

        this.uri = uri;
        this.provider = provider;
    }

    connect() {
        try {
            this.connection = this.provider.establishConnection(this.uri);
        }
    }


    disconnect() { 
        this.connection.close();
    }
}

// data container/vessel/structure  --> não tem methods, não tem business logic no seu interior (só serve para armazenar e transportar data)..
class UserCredentials {
    public email: string;
    public password: string;
}