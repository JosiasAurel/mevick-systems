
import { User } from "../database/user";

const resolvers = {
    Query: {

        getUsers: async () => {

            let isError: any = false;

            let fetchedUsers: Array<any> = [];

            let unval: any; // dirty trick that works

            let users__ = await User.find((error: any, users_) => {
                if (error) {
                    isError = true;
                }

                fetchedUsers = users_;
                return fetchedUsers;
            });

            unval = await users__;

            if (isError) {
                return {status: "Error"}
            } else {
                return fetchedUsers;
            }
        }
    }
}

export { resolvers };