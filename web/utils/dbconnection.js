import { connect } from 'mongoose';

export default async function main() {
    try {
        await connect('mongodb://127.0.0.1:27017/instasync');
        console.log('conected to database successfully');
    } catch (error) {
        console.log(error);
    }
}
