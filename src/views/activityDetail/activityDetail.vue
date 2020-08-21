<template>
	<div v-show="isLoaded">
		<div class="card-wrapper">
			<div class="pic"><img class="img-block"
					:src="activityInfo.picUrl"
					alt="活动图"></div>
		</div>
		<div class="detail-container">
			<div class="normal-block">
				<div class="fw700 big-font mb9">{{activityInfo.tittle}}</div>
				<div class="text-light-info mb9">时间：{{activityInfo.timeRange}}</div>
				<div class="text-light-info mb9">预约截止日期：{{activityInfo.startTime}}</div>
				<!-- <div class="text-light-info">地址：{{activityInfo.location}}</div> -->
			</div>
			<div class="item-block mb18">
				<div class="fw700 big-font mb9">活动介绍</div>
				<div v-html="activityInfo.content"
					class=" mb9"></div>
			</div>
		</div>
		<div class="order">
			<div v-if="canAppoint === 1"
				:class="{'single-btn':true,'active':ifAppointed}"
				@click="showDialog">{{ifAppointed?'已预约':'预约'}}</div>
			<div v-else
				class="single-btn">{{canAppoint === 2?'活动中':'已结束'}}</div>
		</div>
		<div class="appoint-modal"
			v-if="modalFlag">
			<div class="first">
				<div style="position:relative"
					class="pic">
					<img style="margin:0 auto"
						src="../../assets/img/appoint.png"
						alt="" />
					<!-- 关闭按钮 -->
					<div class="close"
						@click="modalFlag = false">
						<img class="img-block"
							:src="dprImg('live-close.png')"
							alt="" />
					</div>
					<!-- 装饰物 -->
					<div class="live-dec">
						<img :src="dprImg('live-dec.png')"
							alt="" />
					</div>
				</div>
			</div>
			<div class="second">
				<h3>活动预约</h3>
				<p>
					<span>姓名：</span>
					<input type="text"
						placeholder="请填写姓名"
						v-model="queryParam.realName">
				</p>
				<p>
					<span>电话：</span>
					<input type="text"
						placeholder="请填写电话"
						v-model="queryParam.phone"
						disabled>
				</p>
				<p :class="{'single-btn':true,'active':ifAppointed}"
					@click="appointment">立即预约</p>
			</div>
		</div>
	</div>
</template>
<script>
import getRouteToken from '@/mixins/getRouteToken'
import moment from 'moment';
import { appointment, getActivityInfo } from '@/service/coreApi';
export default {
  mixins: [getRouteToken],
  data () {
    return {
      activityInfo: {},
      modalFlag: false,
      queryParam: {
        realName: '',
        phone: ''
      },
      ifAppointed:false,
      isLoaded:false,
      canAppoint:1
    };
  },
  created () {
    this.getRouteToken()
  },
  mounted() {
    const {$route:{
      query:{
        activityId,
        name,
        phone
      }
    }} = this
    this.queryParam.realName = name
    this.queryParam.phone = phone
    this.getActivityInfo(activityId||1);
  },
  methods: {
    showDialog() {
      if(this.ifAppointed) return
      this.modalFlag = true
    },
    handleTimeRange ({ startTime, endTime }) {
      let s = moment(startTime).valueOf()
      let e = moment(endTime).valueOf()
      let n = moment(new Date()).valueOf()
      if(n<s)  {
        this.canAppoint =  1
      } else if(n>s&&n<e) {
        this.canAppoint =   2
      } else if(n>e) {
        this.canAppoint =   3
      }
      return `${moment(startTime).format('YYYY年MM月DD日')} - ${moment(
				endTime
			).format('YYYY年MM月DD日')}`;
    },
    getActivityInfo (activityId) {
      const params = { activityId };
      getActivityInfo(params).then(res => {
        this.isLoaded = true
        this.ifAppointed =res.resultBody.ifAppointed
        this.activityInfo = {
          ...res.resultBody,
          timeRange: this.handleTimeRange(res.resultBody)
        };
      });
    },
    appointment () {
      const params = {
        activityId: this.$route.query.activityId,
        realName: this.queryParam.realName,
        phone: this.queryParam.phone,
        type: 2
			};
			 if (!this.queryParam.realName || !this.queryParam.phone) {
        this.$toast("姓名和手机号不能为空");
      }else {
				 appointment(params).then(res => {
        if (res.status === 1) {
            this.$toast({
              message: "预定成功",
              duration: 500
            });
            this.ifAppointed = true
            this.modalFlag = false;
          } else {
            if (res.msg) {
              this.$toast({
                message: res.msg
              });
            }
            if (res.errorMsg) {
              this.$toast({
                message: res.errorMsg
              });
            }
          }
      });

			}

    }
  }
};
</script>

<style lang="scss" scoped>
.text-light-info {
	color: #666666;
}
.card-wrapper {
	height: 2.4rem;
	width: 100%;
	background: url('../../assets/img/mask.png') no-repeat center center;
	background-size: 100% 100%;
	position: relative;
	margin-bottom: 0.53rem;
	.pic {
		width: 3.45rem;
		height: 1.96rem;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: -0.53rem;
	}
}
.order {
	// padding: .18rem .15rem;
	padding: 0 0.15rem;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0.57rem;
	// bottom: 0;
	// background-color: #fff;
	.active {
		background: #f5f5f5;
		color: #999;
	}
}
.appoint-modal {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.75);
	z-index: 999;
	div.first {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 100%;
		height: 100%;
		position: relative;
		img {
			width: 80%;
		}
		.close {
			position: absolute;
			top: 0.26rem;
			right: 24%;
			color: #7e5518;
			font-size: 0.2rem;
			width: 0.2rem;
			height: 0.2rem;
			z-index: 999;
			img {
				width: 100%;
			}
		}
		.live-dec {
			position: absolute;
			top: 0.05rem;
			right: 17%;
			width: 1.06rem;
			height: 0.73rem;
			img {
				width: 100%;
				display: block;
			}
		}
	}
	div.second {
		width: 50%;
		position: absolute;
		top: 49%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
		text-align: center;
		h3 {
			color: #7e5518;
			font-weight: bold;
			font-size: 0.18rem;
		}
		p {
			border-bottom: 1px solid #7e5518;
			padding-bottom: 0.1rem;
			padding-top: 0.15rem;
			span {
				color: #7e5518;
				font-size: 0.16rem;
			}
			input {
				width: 1.28rem;
				border: none;
				background: none;
				color: #7e5518;
				&::placeholder {
					color: #7e5518;
					opacity: 0.48;
				}
			}
		}
		.single-btn {
			width: 100%;
			padding: 0;
			border: none;
			margin-top: 0.7rem;
			margin-bottom: 0.28rem;
		}
	}
}
</style>
