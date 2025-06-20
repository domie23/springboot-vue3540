<template>
	<div class="addEdit-block" :style='{"padding":"10px 30px 30px","background":"url(http://codegen.caihongy.cn/20230228/47752d6be3a94e8892a83ec2a70c8443.png)"}' style="width: 100%;">
		<el-form
			:style='{"border":"1px solid #ddd","padding":"30px","boxShadow":"0 0px 0px #ddd","borderRadius":"5px","background":"#ffffff"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="180px"
		>
			<template >
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="select" v-if="type!='info'" label="车辆车型" prop="cheliangchexing">
					<el-select :disabled="ro.cheliangchexing" @change="cheliangchexingChange" v-model="ruleForm.cheliangchexing" placeholder="请选择车辆车型">
						<el-option
							v-for="(item,index) in cheliangchexingOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.cheliangchexing" label="车辆车型" prop="cheliangchexing">
					<el-input v-model="ruleForm.cheliangchexing" placeholder="车辆车型" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="车牌号码" prop="chepaihaoma">
					<el-input v-model="ruleForm.chepaihaoma" placeholder="车牌号码" clearable  :readonly="ro.chepaihaoma"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="车牌号码" prop="chepaihaoma">
					<el-input v-model="ruleForm.chepaihaoma" placeholder="车牌号码" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="车辆颜色" prop="cheliangyanse">
					<el-input v-model="ruleForm.cheliangyanse" placeholder="车辆颜色" clearable  :readonly="ro.cheliangyanse"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="车辆颜色" prop="cheliangyanse">
					<el-input v-model="ruleForm.cheliangyanse" placeholder="车辆颜色" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="select" v-if="type!='info'" label="驾驶员工号" prop="jiashiyuangonghao">
					<el-select :disabled="ro.jiashiyuangonghao" @change="jiashiyuangonghaoChange" v-model="ruleForm.jiashiyuangonghao" placeholder="请选择驾驶员工号">
						<el-option
							v-for="(item,index) in jiashiyuangonghaoOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.jiashiyuangonghao" label="驾驶员工号" prop="jiashiyuangonghao">
					<el-input v-model="ruleForm.jiashiyuangonghao" placeholder="驾驶员工号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="驾驶员姓名" prop="jiashiyuanxingming">
					<el-input v-model="ruleForm.jiashiyuanxingming" placeholder="驾驶员姓名" clearable  :readonly="ro.jiashiyuanxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="驾驶员姓名" prop="jiashiyuanxingming">
					<el-input v-model="ruleForm.jiashiyuanxingming" placeholder="驾驶员姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="油费" prop="youfei">
					<el-input v-model="ruleForm.youfei" placeholder="油费" clearable  :readonly="ro.youfei"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="油费" prop="youfei">
					<el-input v-model="ruleForm.youfei" placeholder="油费" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="维修费" prop="weixiufei">
					<el-input v-model="ruleForm.weixiufei" placeholder="维修费" clearable  :readonly="ro.weixiufei"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="维修费" prop="weixiufei">
					<el-input v-model="ruleForm.weixiufei" placeholder="维修费" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="驾驶员工资" prop="jiashiyuangongzi">
					<el-input v-model="ruleForm.jiashiyuangongzi" placeholder="驾驶员工资" clearable  :readonly="ro.jiashiyuangongzi"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="驾驶员工资" prop="jiashiyuangongzi">
					<el-input v-model="ruleForm.jiashiyuangongzi" placeholder="驾驶员工资" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="过路费" prop="guolufei">
					<el-input v-model="ruleForm.guolufei" placeholder="过路费" clearable  :readonly="ro.guolufei"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="过路费" prop="guolufei">
					<el-input v-model="ruleForm.guolufei" placeholder="过路费" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="补贴" prop="butie">
					<el-input v-model="ruleForm.butie" placeholder="补贴" clearable  :readonly="ro.butie"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="补贴" prop="butie">
					<el-input v-model="ruleForm.butie" placeholder="补贴" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'" label="总金额" prop="zongjine">
					<el-input v-model="zongjine" placeholder="总金额" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.zongjine" label="总金额" prop="zongjine">
					<el-input v-model="ruleForm.zongjine" placeholder="总金额" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="date" v-if="type!='info'" label="登记时间" prop="dengjishijian">
					<el-date-picker
						format="yyyy 年 MM 月 dd 日"
						value-format="yyyy-MM-dd"
						v-model="ruleForm.dengjishijian" 
						type="date"
						:readonly="ro.dengjishijian"
						placeholder="登记时间"
					></el-date-picker> 
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.dengjishijian" label="登记时间" prop="dengjishijian">
					<el-input v-model="ruleForm.dengjishijian" placeholder="登记时间" readonly></el-input>
				</el-form-item>
			</template>
			<el-form-item :style='{"padding":"0","margin":"0"}' class="btn">
				<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#337ab7","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"border":"1px solid #1b5a90","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#1b5a90","borderRadius":"4px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"border":"1px solid #1b5a90","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#1b5a90","borderRadius":"4px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				cheliangchexing : false,
				chepaihaoma : false,
				cheliangyanse : false,
				jiashiyuangonghao : false,
				jiashiyuanxingming : false,
				youfei : false,
				weixiufei : false,
				jiashiyuangongzi : false,
				guolufei : false,
				butie : false,
				zongjine : false,
				dengjishijian : false,
			},
			
			
			ruleForm: {
				cheliangchexing: '',
				chepaihaoma: '',
				cheliangyanse: '',
				jiashiyuangonghao: '',
				jiashiyuanxingming: '',
				youfei: '',
				weixiufei: '',
				jiashiyuangongzi: '',
				guolufei: '',
				butie: '',
				zongjine: '',
				dengjishijian: '',
			},
		
			cheliangchexingOptions: [],
			jiashiyuangonghaoOptions: [],
			
			rules: {
				cheliangchexing: [
				],
				chepaihaoma: [
				],
				cheliangyanse: [
				],
				jiashiyuangonghao: [
				],
				jiashiyuanxingming: [
				],
				youfei: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				weixiufei: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				jiashiyuangongzi: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				guolufei: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				butie: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				zongjine: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				dengjishijian: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {
		zongjine: {
			get: function () {
				return 0+parseFloat(this.ruleForm.youfei==""?0:this.ruleForm.youfei)+parseFloat(this.ruleForm.weixiufei==""?0:this.ruleForm.weixiufei)+parseFloat(this.ruleForm.jiashiyuangongzi==""?0:this.ruleForm.jiashiyuangongzi)+parseFloat(this.ruleForm.guolufei==""?0:this.ruleForm.guolufei)+parseFloat(this.ruleForm.butie==""?0:this.ruleForm.butie) || 0
			}
		},



	},
    components: {
    },
	created() {
		this.ruleForm.dengjishijian = this.getCurDate()
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='cheliangchexing'){
							this.ruleForm.cheliangchexing = obj[o];
							this.ro.cheliangchexing = true;
							continue;
						}
						if(o=='chepaihaoma'){
							this.ruleForm.chepaihaoma = obj[o];
							this.ro.chepaihaoma = true;
							continue;
						}
						if(o=='cheliangyanse'){
							this.ruleForm.cheliangyanse = obj[o];
							this.ro.cheliangyanse = true;
							continue;
						}
						if(o=='jiashiyuangonghao'){
							this.ruleForm.jiashiyuangonghao = obj[o];
							this.ro.jiashiyuangonghao = true;
							continue;
						}
						if(o=='jiashiyuanxingming'){
							this.ruleForm.jiashiyuanxingming = obj[o];
							this.ro.jiashiyuanxingming = true;
							continue;
						}
						if(o=='youfei'){
							this.ruleForm.youfei = obj[o];
							this.ro.youfei = true;
							continue;
						}
						if(o=='weixiufei'){
							this.ruleForm.weixiufei = obj[o];
							this.ro.weixiufei = true;
							continue;
						}
						if(o=='jiashiyuangongzi'){
							this.ruleForm.jiashiyuangongzi = obj[o];
							this.ro.jiashiyuangongzi = true;
							continue;
						}
						if(o=='guolufei'){
							this.ruleForm.guolufei = obj[o];
							this.ro.guolufei = true;
							continue;
						}
						if(o=='butie'){
							this.ruleForm.butie = obj[o];
							this.ro.butie = true;
							continue;
						}
						if(o=='zongjine'){
							this.ruleForm.zongjine = obj[o];
							this.ro.zongjine = true;
							continue;
						}
						if(o=='dengjishijian'){
							this.ruleForm.dengjishijian = obj[o];
							this.ro.dengjishijian = true;
							continue;
						}
				}
				












			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.$http({
				url: `option/cheliangxinxi/cheliangchexing`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.cheliangchexingOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
            this.$http({
				url: `option/jiashiyuan/jiashiyuangonghao`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.jiashiyuangonghaoOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
			
		},
			// 下二随
			cheliangchexingChange () {
				this.$http({
					url: `follow/cheliangxinxi/cheliangchexing?columnValue=`+ this.ruleForm.cheliangchexing,
					method: "get"
				}).then(({ data }) => {
					if (data && data.code === 0) {
						if(data.data.chepaihaoma){
							this.ruleForm.chepaihaoma = data.data.chepaihaoma
						}
						if(data.data.cheliangyanse){
							this.ruleForm.cheliangyanse = data.data.cheliangyanse
						}
						if(data.data.jiashiyuanxingming){
							this.ruleForm.jiashiyuanxingming = data.data.jiashiyuanxingming
						}
					} else {
						this.$message.error(data.msg);
					}
				});
			},
			// 下二随
			jiashiyuangonghaoChange () {
				this.$http({
					url: `follow/jiashiyuan/jiashiyuangonghao?columnValue=`+ this.ruleForm.jiashiyuangonghao,
					method: "get"
				}).then(({ data }) => {
					if (data && data.code === 0) {
						if(data.data.chepaihaoma){
							this.ruleForm.chepaihaoma = data.data.chepaihaoma
						}
						if(data.data.cheliangyanse){
							this.ruleForm.cheliangyanse = data.data.cheliangyanse
						}
						if(data.data.jiashiyuanxingming){
							this.ruleForm.jiashiyuanxingming = data.data.jiashiyuanxingming
						}
					} else {
						this.$message.error(data.msg);
					}
				});
			},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `cheliangyunying/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {
        this.ruleForm.zongjine = this.zongjine

























var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "cheliangyunying/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `cheliangyunying/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.cheliangyunyingCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `cheliangyunying/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.cheliangyunyingCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.cheliangyunyingCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #666;
	  	  font-weight: 500;
	  	  width: 180px;
	  	  font-size: 16px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 180px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 1px solid #5479bb;
	  	  border-radius: 4px;
	  	  padding: 0 12px;
	  	  box-shadow: 1px 2px 3px #eee;
	  	  outline: none;
	  	  color: #aaa;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 1px solid #5479bb;
	  	  border-radius: 4px;
	  	  padding: 0 10px;
	  	  box-shadow: 1px 2px 3px #eee;
	  	  outline: none;
	  	  color: #aaa;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 1px solid #5479bb;
	  	  border-radius: 4px;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 1px 2px 3px #eee;
	  	  outline: none;
	  	  color: #aaa;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 1px dashed #5479bb;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #5479bb;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 120px;
	  	  text-align: center;
	  	  height: 120px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 1px dashed #5479bb;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #5479bb;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 120px;
	  	  text-align: center;
	  	  height: 120px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 1px dashed #5479bb;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #5479bb;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 120px;
	  	  text-align: center;
	  	  height: 120px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 1px solid #5479bb;
	  	  border-radius: 4px;
	  	  padding: 12px;
	  	  box-shadow: 1px 2px 3px #eee;
	  	  outline: none;
	  	  color: #aaa;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: auto;
	  	}
</style>
