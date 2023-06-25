import React, {createRef, useEffect, useImperativeHandle, useRef} from 'react';



const ChildComponent = React.forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        someMethod(num) {
            // 子组件的方法逻辑
            console.log('子组件方法被调用',num);
        }
    }));

    // 将子组件的ref传递给实际的DOM元素或组件
    return <div ref={ref}>子组件内容</div>;
});



const ParentComponent = () => {
    const childRefs = useRef([]);
    const arr=[1,2,3,4,5,6]


    const handleClick = () => {
        // 调用子组件的方法

        console.log(childRefs)
        childRefs.current.forEach((childRef,index) => {
            if (childRef && typeof childRef['someMethod'] === 'function') {
                childRef['someMethod'](index);
            }
        });
    };

    return (
        <div>
            {
                arr.map((i,index)=>  <ChildComponent key={index} ref={(e)=>childRefs.current[index]=e} />)
            }

            <button onClick={handleClick}>调用子组件方法</button>
        </div>
    );
};

export default ParentComponent;
