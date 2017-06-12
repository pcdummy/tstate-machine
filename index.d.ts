// Generated by dts-bundle v0.7.2

export class StateMachine {
        /**
            * @description константа с названием initial-состояния.
            * @type {string}
            */
        static INITIAL: string;
        /**
            * @description Служебный статический метод, генерирующий текст ошибки, сообщающей о невозможности перейти в состояние
            * @param currentState - из какого состояния не смогли перейти
            * @param stateName - в какой состяоние не смогли перейти
            * @returns string - сообщение об ошибке
            */
        static NEXT_STATE_RESTRICTED(currentState: string, stateName: string): string;
        /**
            * @description Служебный статический декоратор, прячет декорированный метод от перебора в цикле for-in
            */
        static hide(): (o: object, key: string, descriptor: PropertyDescriptor) => object;
        /**
            * @description Служебный статичный декоратор, делает наследование состояния.
            * Название декорируемого свойства класса будет названием регистрируемого сосотояния
            * @param parentState - имя родительского сосотояния(от которого наследуемся)
            * @param to - массив/строка состояний/состояния, в которые/которое можно перейти из данного состояния.
            */
        static extend(parentState: string, to?: string | Array<string>): (target: object, stateName: string) => void;
        /**
            * @description Массив состояний, в которые можно перейти из 'initial'
            */
        protected readonly $next: Array<string>;
        /**
            * @description Метод для смены состояния StateMachine в targetState.
            * Проверяет что оно зарегистрировано, что в него можно перейти из текущего состояния и если ок - переходит.
            * @param targetState - название состояния, в которое нужно перейти
            * @param args - любые данные, которые будут проброшены в onEnter-callback при входе в состояние
            */
        transitTo(targetState: string, ...args: Array<any>): void;
        /**
            * @description Служебный метод, который обязательно вызывать в конструкторе класса-потомка
            * для создания слепка начального состояния StateMachine.
            */
        protected rememberInitState(): void;
        /**
            * @description Метод, регистрирующий коллбэк cb для ВХОДА в состяоние stateName
            * @param stateName - название состояния
            * @param cb - коллбэк
            */
        onEnter(stateName: string, cb: () => void): () => void;
        /**
            * @description Метод, регистрирующий коллбэк cb для ВЫХОДА из состояния stateName
            * @param stateName - название состояния
            * @param cb - коллбэк
            */
        onLeave(stateName: string, cb: () => void): () => void;
        /**
            * @description Название текущего состояния StateMachine
            */
        readonly currentState: string;
        /**
            * @description Проверка, находится-ли машина в состоянии stateName
            * @param stateName - название проверяемого состояния
            */
        is(stateName: string): boolean;
        /**
            * @description Проверка что машина может перейти в состояние stateName из текущего
            * @param stateName - название целевого состояния
            * @returns {boolean}
            */
        can(stateName: string): boolean;
        /**
            * @description Получить список состояний, в которые машина может перейти из текущего
            * @return {Array<string>}
            */
        transitions(): Array<string>;
}

export interface IStateDeclaration {
    [propName: string]: any;
}

