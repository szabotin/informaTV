export class GlobalService {
    private isAutoRouting: boolean = false ;

    getIsAutoRouting() {
        return this.isAutoRouting ;
    }

    setAutoRouting (autoRouting: boolean) {
        this.isAutoRouting = autoRouting ;
    }
}