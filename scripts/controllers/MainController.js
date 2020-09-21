import ContainerController from '../../cardinal/controllers/base-controllers/ContainerController.js';

class MainController extends ContainerController {
    getModel() {
        return {
            footer: [
                {
                    name: 'Balance',
                    icon: 'balance-scale'
                },
                {
                    name: 'Payments',
                    icon: 'money'
                },
                {
                    name: 'Services',
                    icon: 'briefcase'
                },
                {
                    name: 'Account',
                    icon: 'user'
                }
            ]
        }
    }

    constructor(element) {
        super(element);
        this.model = this.setModel(this.getModel());

        // this.on("needMenuItems", e => {
        //     e.stopImmediatePropagation();
        //     const callback = e.detail;
        //     callback(null, this.model.sidebar);
        // });
    }
}

export default MainController;