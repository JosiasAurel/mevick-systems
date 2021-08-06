
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
        },

        getUser: async (parent: any, args: any) => {

            // extract the user ID from GraphQL params
            const userId: string = args.id;

            let isError: boolean = false; // error checker
            let fetchedUser: any; // the fetched user

            let unval: any; // dirty but working trick

            let user__ = await User.findById(userId, (error: any, user_: any) => {
                if (error) {
                    isError = true;
                }

                fetchedUser = user_;
            });

            unval = await user__;

            if (!isError) {
                return fetchedUser;
            } else {
                return {status: "Failed"}
            }
        }
    }
}

export { resolvers };