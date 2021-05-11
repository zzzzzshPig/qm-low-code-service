import { Service } from 'egg'

const saveData = new Map()

export default class Edit extends Service {
    public async save(id: number, data: any) {
        saveData.set(id, data)
    }

    public async getData(id: number) {
        return saveData.get(id) || []
    }
}
