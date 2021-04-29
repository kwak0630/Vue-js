<template>
	<div class="table-wrap">
		<table>
			<colgroup>
				<col width="10%"/>
				<col />
				<col width="10%"/>
				<col width="20%"/>
				<col width="10%"/>
			</colgroup>
			<thead>
			<tr>
				<th>번호</th>
				<th>제목</th>
				<th>작성자</th>
				<th>날짜</th>
				<th>조회수</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="(item, key) in boardItem" v-bind:key="key">
				<td>{{item.num}}</td>
				<td class="subject"><a href="#" @click="$emit('modalOpen',item); $emit('input',item)">{{item.subject}}</a></td>
				<td>{{item.name}}</td>
				<td>{{item.date}}</td>
				<td>{{item.hit}}</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'boardTable',
		props: [
			'boardItem'
		],
	};
</script>