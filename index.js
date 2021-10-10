/*
const rank = [1, 2, 3, 4];
const shape = [2, 2];
const dataType = "int32";

const tensorflow = tf.tensor(rank, shape, dataType);
tensorflow.print()
*/

/*const x = tf.tidy(() => {
    const a = tf.tensor([1, 2, 3, 4], [2, 2]);
    a.print()

    // const b = tf.tensor1d([1,2,3]);
    const b = tf.tensor2d([4,5,6,7], [2, 2]);
    b.print()

    a.sub(b).print();

    const d = tf.tensor(4);
    const e = d.square().print();
    tf.tensor(9)

    return d;
})

console.log(tf.memory().numTensors) // 0
*/


/*async function generateNegatives(){
    const model = tf.sequential();
    model.add(tf.layers.dense({ inputShape: [1], units: 1 }))
    
    model.compile({
        loss: "meanSquaredError",
        optimizer: "sgd",
        metrics: "accuracy"
    })

    const data = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8], [8, 1]);
    const labels = tf.tensor2d([-1, -2, -3, -4, -5, -6, -7, -8], [8, 1]);

    await model.fit(data, labels, { epochs: 500 })
    document.querySelector("#result").innerText = model.predict(tf.tensor2d([17], [1, 1]))

}

generateNegatives(); */

/*async function generateSum(){
    const model = tf.sequential();
    model.add(tf.layers.dense({ inputShape: [1], units: 1 }));

    model.compile({
        loss: "meanSquaredError",
        optimizer: "sgd",
        metrics: "accuracy"
    })
    const data = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 1]);
    const labels = tf.tensor2d([1, 4, 9, 16, 25, 36, 49, 64, 81, 100], [10, 1])
    await model.fit(data, labels, { epochs: 2000 })
    document.querySelector("#result").innerText = model.predict(tf.tensor2d([11], [1, 1]))
}

generateSum();
*/

const a = tf.tensor1d([8, 2, 1]).square()
const b = tf.tensor1d([9, 3, 6]);
const c = tf.add(b, a);
c.print();

