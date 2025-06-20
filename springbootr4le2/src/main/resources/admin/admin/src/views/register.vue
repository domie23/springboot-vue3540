<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20221011/e8a93776b74f4f60816fea7cb08f0eab.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
			<el-form v-if="pageFlag=='register'" :style='{"padding":"40px 20px 20px","boxShadow":"0 1px 6px rgba(64, 158, 255, .8)","margin":"100px 0px 0px","borderRadius":"20px","background":"#fff","width":"750px","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm">
				<div v-if="true" :style='{"boxShadow":"1px 3px 4px #98c1ef","padding":"10px 0","margin":"-75px 0 10px 70px","borderColor":"#266bb6","color":"#ffffff","textAlign":"center","borderRadius":"6px 30px","background":"-webkit-linear-gradient(top,#2b84e6,#0b417c)","borderWidth":"0px 2px 2px 0px","width":"580px","fontSize":"20px","position":"absolute","borderStyle":"solid","textShadow":"0px 0px 0px rgba(64, 158, 255, .5)","height":"auto"}' class="title">校车调度管理系统注册</div>
				<el-form-item :style='{"width":"65%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashiyuan'">
					<div v-if="true" :style='{"color":"#419bff","left":"-120px","textAlign":"right","width":"120px","lineHeight":"44px","fontSize":"15px","position":"absolute","fontWeight":"600"}' class="lable">驾驶员工号</div>
					<el-input  v-model="ruleForm.jiashiyuangonghao"  autocomplete="off" placeholder="驾驶员工号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"65%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashiyuan'">
					<div v-if="true" :style='{"color":"#419bff","left":"-120px","textAlign":"right","width":"120px","lineHeight":"44px","fontSize":"15px","position":"absolute","fontWeight":"600"}' class="lable">密码</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"65%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashiyuan'">
					<div v-if="true" :style='{"color":"#419bff","left":"-120px","textAlign":"right","width":"120px","lineHeight":"44px","fontSize":"15px","position":"absolute","fontWeight":"600"}' class="lable">确认密码</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"65%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashiyuan'">
					<div v-if="true" :style='{"color":"#419bff","left":"-120px","textAlign":"right","width":"120px","lineHeight":"44px","fontSize":"15px","position":"absolute","fontWeight":"600"}' class="lable">驾驶员姓名</div>
					<el-input  v-model="ruleForm.jiashiyuanxingming"  autocomplete="off" placeholder="驾驶员姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"65%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashiyuan'">
					<div v-if="true" :style='{"color":"#419bff","left":"-120px","textAlign":"right","width":"120px","lineHeight":"44px","fontSize":"15px","position":"absolute","fontWeight":"600"}' class="lable">驾驶证号</div>
					<el-input  v-model="ruleForm.jiashizhenghao"  autocomplete="off" placeholder="驾驶证号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"65%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashiyuan'">
					<div v-if="true" :style='{"color":"#419bff","left":"-120px","textAlign":"right","width":"120px","lineHeight":"44px","fontSize":"15px","position":"absolute","fontWeight":"600"}' class="lable">性别</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in jiashiyuanxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"65%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashiyuan'">
					<div v-if="true" :style='{"color":"#419bff","left":"-120px","textAlign":"right","width":"120px","lineHeight":"44px","fontSize":"15px","position":"absolute","fontWeight":"600"}' class="lable">驾龄</div>
					<el-input  v-model="ruleForm.jialing"  autocomplete="off" placeholder="驾龄"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"65%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashiyuan'">
					<div v-if="true" :style='{"color":"#419bff","left":"-120px","textAlign":"right","width":"120px","lineHeight":"44px","fontSize":"15px","position":"absolute","fontWeight":"600"}' class="lable">联系方式</div>
					<el-input  v-model="ruleForm.lianxifangshi"  autocomplete="off" placeholder="联系方式"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"65%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashiyuan'">
					<div v-if="true" :style='{"color":"#419bff","left":"-120px","textAlign":"right","width":"120px","lineHeight":"44px","fontSize":"15px","position":"absolute","fontWeight":"600"}' class="lable">驾驶车型</div>
					<el-input  v-model="ruleForm.jiashichexing"  autocomplete="off" placeholder="驾驶车型"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"65%","padding":"0","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiashiyuan'">
					<div v-if="true" :style='{"color":"#419bff","left":"-120px","textAlign":"right","width":"120px","lineHeight":"44px","fontSize":"15px","position":"absolute","fontWeight":"600"}' class="lable">职称</div>
                    <el-select v-model="ruleForm.zhicheng" placeholder="请选择职称" >
                        <el-option
                            v-for="(item,index) in jiashiyuanzhichengOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<button :style='{"border":"0","cursor":"pointer","padding":"0 40px","boxShadow":"0px 0px 0px #f9d7b5","margin":"20px auto 5px","color":"#fff","display":"block","outline":"none","borderRadius":"8px","background":"-webkit-linear-gradient(top,#96d148,#4a7f06)","width":"auto","fontSize":"18px","height":"44px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0 10%","color":"rgba(159, 159, 159, 1)","display":"inline-block","lineHeight":"1","fontSize":"14px","textDecoration":"underline"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			ruleForm: {
                xingbie: '',
                zhicheng: '',
			},

            pageFlag : '',
			tableName:"",
			rules: {},
            jiashiyuanxingbieOptions: [],
            jiashiyuanzhichengOptions: [],
		};
	},
	mounted(){
        this.pageFlag = this.$storage.get("pageFlag");
		let table = this.$storage.get("loginTable");
		this.tableName = table;
        this.jiashiyuanxingbieOptions = "男,女".split(',')
        this.jiashiyuanzhichengOptions = "有编制,无编制".split(',')
	},
	created() {
    
	},
	destroyed() {
		  	},
	methods: {
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.jiashiyuangonghao) && `jiashiyuan` == this.tableName){
						this.$message.error(`驾驶员工号不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.mima) && `jiashiyuan` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `jiashiyuan` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`jiashiyuan` == this.tableName && this.ruleForm.jialing&&(!this.$validate.isIntNumer(this.ruleForm.jialing))){
						this.$message.error(`驾龄应输入整数`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`jiashiyuan` == this.tableName && this.ruleForm.lianxifangshi&&(!this.$validate.isMobile(this.ruleForm.lianxifangshi))){
						this.$message.error(`联系方式应输入手机格式`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
				
			
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20221011/e8a93776b74f4f60816fea7cb08f0eab.jpg);

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 0;
						padding: 0 10px;
						margin: 0px 0px 0px  0px;
						color: #999;
						width: 100%;
						font-size: 14px;
						border-color: #419bff;
						border-width: 0px 0px 2px 0px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 0;
						border-radius: 0px;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #999;
						width: 288px;
						font-size: 14px;
						border-color: #419bff;
						border-width: 0px 0px 2px 0px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 0;
						border-radius: 0px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #999;
						width: 288px;
						font-size: 14px;
						border-color: #419bff;
						border-width: 0px 0px 2px 0px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 0;
						border-radius: 0px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #999;
						width: 288px;
						font-size: 14px;
						border-color: #419bff;
						border-width: 0px 0px 2px 0px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 1px dashed rgba(64, 158, 255, 1);
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  margin: 10px 0px 10px 10px;
		  		  color: rgba(64, 158, 255, 1);
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 100px;
		  		  text-align: center;
		  		  height: 100px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px dashed rgba(64, 158, 255, 1);
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  margin: 10px 0px 10px 10px;
		  		  color: rgba(64, 158, 255, 1);
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 100px;
		  		  text-align: center;
		  		  height: 100px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px dashed rgba(64, 158, 255, 1);
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  margin: 10px 0px 10px 10px;
		  		  color: rgba(64, 158, 255, 1);
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 100px;
		  		  text-align: center;
		  		  height: 100px;
		  		}
	}
</style>
