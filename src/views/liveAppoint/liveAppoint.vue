<template>
	<!-- 直播预约 -->
	<div v-show="isLoaded">
		<div class="banner"
			:style="{backgroundImage: 'url(' + activityInfo.picUrl + ')'  }"></div>
		<div class="item-block">
			<div class="time-wrapper">
				<div class="tips flex-between-center">
					<div class="left-bar bars"></div>
					<span>距离直播开始</span>
					<div class="right-bar bars"></div>
				</div>
				<div class="mb18 time flex-center-center">
					<span class="day mr4">{{ timeLeft }}</span>
				</div>
				<div v-if="!isStart"
					:class="{'single-btn':true,'active':ifAppointed}"
					@click="showDialog">{{ifAppointed?'已预约':'立即预约'}}</div>
				<div v-else
					class="single-btn golive"
					@click="goLive">
					<img src="./../../assets/img/直播@2x.png"
						alt="logo">进入直播</div>
			</div>
		</div>
		<div class="item-block">
			<div class="top-block flex-between-center mt18">
				<div class="title">活动介绍</div>
			</div>
			<div class="intro-title">
				<div class="title">{{ activityInfo.tittle }}</div>
				<div class="time">时间：{{ activityInfo.timeRange }}</div>
			</div>
			<div class="content">
				<div class="item"
					v-html="activityInfo.content"></div>
			</div>
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
				<h3>直播预约</h3>
				<p>
					<span>姓名：</span>
					<input type="text"
						placeholder="请填写姓名"
						v-model="queryParam.realName" />
				</p>
				<p>
					<span>电话：</span>
					<input type="text"
						placeholder="请填写电话"
						v-model="queryParam.phone"
						disabled />
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
      timeLeft: '00日 00时00分00秒',
      modalFlag: false,
      queryParam: {
        realName: '',
        phone: ''
      },
      ifAppointed: false,
      isLoaded:false,
      isStart:false,
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
    this.getActivityInfo(activityId);
  },
  methods: {
    getActivityInfo (activityId) {
      const params = { activityId };
      getActivityInfo(params).then(res => {
        this.activityInfo = {
          ...res.resultBody,
          timeRange: this.handleTimeRange(res.resultBody)
        };
        this.ifAppointed = res.resultBody.ifAppointed;
        this.handleTimeLeft(res.resultBody);
      });
    },
    showDialog() {
      if(this.ifAppointed) return
      this.modalFlag = true
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
        this.ifAppointed = true;
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
    },
    handleTimeRange ({ startTime, endTime }) {
      return `${moment(startTime).format('YYYY年MM月DD日')} - ${moment(
        endTime
      ).format('YYYY年MM月DD日')}`;
    },
    handleTimeLeft ({ startTime }) {
      const start = moment(startTime);
      const timer = setInterval(() => {
        const now = moment();
        if(start - now < 0)  {
          clearInterval(timer);
          this.isStart = true
        this.isLoaded = true
          return this.timeLeft
        }
        const diff = moment.duration(start - now, 'ms');
        const d = diff.get('day');
        const h = diff.get('hours');
        const m = diff.get('minutes');
        const s = diff.get('seconds');
        this.timeLeft = `${d
          .toString()
          .padStart(2, 0)}日 ${h
          .toString()
          .padStart(2, 0)}时${m
          .toString()
          .padStart(2, 0)}分${s.toString().padStart(2, 0)}秒`;
        this.isLoaded = true
      }, 1000);
      this.$once('hook:beforeDestroy', () => {
        clearInterval(timer);
      })
    },
    goLive() {
      window.location.href = this.$route.query.liveUrl
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
	width: 100%;
	height: 2.4rem;
	background-size: cover;
	background-repeat: no-repeat;
}
.time-wrapper {
	.tips {
		padding: 0.18rem 0 0.14rem;
		box-sizing: border-box;
	}
	.bars {
		width: 1.19rem;
		height: 0.04rem;
		border-radius: 0.05rem 0 0 0.05rem;
		background-size: 100% 100%;
	}
	.left-bar {
		background: url('../../assets/img/left-bar.png') no-repeat center center;
	}
	.right-bar {
		background: url('../../assets/img/right-bar.png') no-repeat center center;
	}
	.time {
		font-size: 0.18rem;
	}
}
.single-btn {
	//   background: url('../../assets/img/appoint-icon.png') no-repeat center center;
	//   background-size: 100% 100%;
	//  height: .44rem;
	//  border-radius: .04rem;
	//  line-height: .44rem;
	//  text-align: center;
	// color: #fff;
	//  font-size: .17rem;
	margin-top: 0.18rem;
}
.active {
	background: #f5f5f5;
	color: #999;
}
.golive {
	background: linear-gradient(233deg, #f67b80 10%, #e92137 86%);
	img {
		width: 14px;
		height: 18px;
		margin-right: 5px;
	}
}

.top-block {
	.title {
		color: #c5b269;
		font-size: 0.18rem;
		font-weight: 700;
	}
}
.intro-title {
	padding: 0.14rem 0;
	.title {
		font-size: 0.17rem;
		font-weight: 700;
	}
	.time {
		font-size: 0.13rem;
		color: #999999;
	}
}
.content {
	margin-bottom: 0.18rem;
	.item /deep/ {
		margin-top: 0.09rem;
		img {
			width: 100%;
		}
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
