function buildItems()// создаёт массив  вещей
{
	items = []
	spec_value = []
	for (let i = 0; i < values.length; i++)
	{
		spec_value.push(values[i]/weights[i])
	    arr = [names[i], values[i], weights[i], spec_value[i]]
		items.push(arr)
	}
	return items
}						// извините, но у меня изначально был написан код, с нуля
                        // поэтому обидно будет, если он пропадёт в пустую)
                        // ведь главное, что код работает, ведь да
                        // (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
                        // 	(＠＾◡＾)

const names = ['часы', 'картина', 'радио', 'ваза', 'книга', 'компьютер']
const values = [175, 90, 20, 50, 10, 200]
const weights = [10, 9, 4, 2, 1, 20]
maxWeight = 20
items = buildItems()
//items.sort(function(a, b){return a - b})

items.sort(function (a, b) {
	if (a[3] < b[3]) {
		return 1;
	}
	if (a[3] > b[3]) {
		return -1;
	}
	return 0;
})

Weight = 0
count = 0
F_Cost = 0
ans_s = []
for (let i = 0; i < values.length; i++) {
	if (Weight + items[i][2] < maxWeight) {
		Weight += items[i][2]
		F_Cost += items[i][1]
		ans_s.push(items[i][0])
		items[i][2] = 1000000000 + items[i][2]
	}
	else
	{
		count = i
		break
	}
}		// 8 мест ост
counter = count
items_s = []
for (let i = count; i < items.length; i++) {
	items_s.push(items[i])
}

for (let o = 0; o < items_s.length; o++) {
	min_x = 10**10
	id = 0
	for (let i = 0; i < items_s.length; i++) {
		if (min_x > items_s[i][2]) {
			min_x = items_s[i][2]
			id = i}
	}
	if (Weight + items_s[id][2] <= maxWeight) {
		Weight += min_x
		F_Cost += items_s[id][2]
		ans_s.push(items_s[id][0])
		counter += 1
		items_s[id][2] = 1000000000 + items_s[id][2]
	}
}

console.log("Сортировка по удельной цене даёт:")
console.log("Полная цена =", F_Cost)
console.log("Взяли:", ans_s.toString())

//abc = [1, 2, 3, 4]; abc.splice(1, 1); console.log(abc)