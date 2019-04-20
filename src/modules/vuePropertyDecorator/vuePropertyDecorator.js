/*
 * @Author: xiaoai
 * @LastEditors: xiaoai
 * @Description: Whatever is worth doing is worth doing well(任何值得做的事就值得把它做好)
 * @Date: 2019-03-05 16:57:14
 * @LastEditTime: 2019-03-07 14:55:23
 */

/**
 * 提供vue组件装饰器(@Props,@Watch,@Emit)
 */
import { createDecorator } from 'vue-class-component';

/**
 * @description: vue props装饰器
 * @param {Number | {} | []}
 * @example @Prop(Number) propA  => props: {propA: { type: Number }}
 * @example @Prop({ default: 'default value' }) => props: {propA: { default: 'default value' }}
 * @example propB @Prop([String, Boolean]) propC => props: {propA: { type: [String, Boolean] }}
 * @return: PropertyDecorator
 */
export function Prop(options) {
    return createDecorator((componentOptions, k) => {
        (componentOptions.props || (componentOptions.props = {}))[k] = options;
    });
}

/**
 * @description: vue watch装饰器
 * @param {string} watch 监听路径
 * @param {object} 监听配置 { deep , immediate }
 * @example @Watch('child') onChildChanged(val: string, oldVal: string) { } =>  watch: {'child': [{handler: onChildChanged, immediate:false, deep: false }]}
 * @return: Decorator
 */
export function Watch(path, options = {}) {
    const { deep = false, immediate = false } = options;

    return createDecorator((componentOptions, handler) => {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }

        const watch = componentOptions.watch;

        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        } else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }

        watch[path].push({ handler, deep, immediate });
    });
}

/**
 * @description: vue emit装饰器
 * @param {string}  emit事件名
 * @example @Emit() addToCount(n: number) { this.count += n } => addToCount(n) {this.count += n;this.$emit('add-to-count', n)}
 * @return: Decorator
 */
export function Emit(event) {
    return function(_target, key, descriptor) {
        const hyphenateRE = /\B([A-Z])/g;
        const hyphenate = str => str.replace(hyphenateRE, '-$1').toLowerCase();
        const isPromise = obj => {
            return obj instanceof Promise || (obj && typeof obj.then === 'function');
        };

        key = hyphenate(key);

        const original = descriptor.value;

        descriptor.value = function emitter(...args) {
            const emit = returnValue => {
                if (returnValue !== undefined) args.unshift(returnValue);
                this.$emit(event || key, ...args);
            };

            const returnValue = original.apply(this, args);

            if (isPromise(returnValue)) {
                returnValue.then(returnValue => {
                    emit(returnValue);
                });
            } else {
                emit(returnValue);
            }
        };
    };
}

